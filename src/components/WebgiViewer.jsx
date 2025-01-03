import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  TonemapPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  mobileAndTabletCheck,
} from "webgi";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";

gsap.registerPlugin(ScrollTrigger);

const WebgiViewer = forwardRef((props, ref) => {
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const memorizedScrollAnimation = useCallback(
    (position, target, isMobile, onUpdate) => {
      if (position && target && onUpdate) {
        scrollAnimation(position, target, isMobile, onUpdate);
      }
    },
    []
  );

  const setupViewer = useCallback(async () => {
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });

    const isMobileOrTablet = mobileAndTabletCheck();

    const manager = await viewer.addPlugin(AssetManagerPlugin);

    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(BloomPlugin);

    viewer.renderer.refreshPipeline();

    // Add loading handler
    manager.addEventListener("progress", (event) => {
      const progress = (event.loaded / event.total) * 100;
      if (progress === 100) {
        setLoading(false);

        // Add reload functionality to refresh the viewer
        const handleReload = useCallback(() => {
          window.location.reload();
        }, []);
        handleReload()
        window.scrollTo(0, 0);
      }
      // You can use progress value to show loading percentage
    });

    try {
      await manager.addFromPath(props.webgiGLB);
      setLoading(false);
    } catch (error) {
      console.error("Error loading 3D model:", error);
      setLoading(false);
    }

    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

    if (isMobileOrTablet) {
      position.set(7.0, 0.12, 0.06);
      target.set(0.0, -0.05, -0.02);
    }

    window.scrollTo(0, 0);

    let needsUpdate = true;

    const onUpdate = () => {
      needsUpdate = true;
      viewer.setDirty();
    };

    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });
    memorizedScrollAnimation(position, target, isMobileOrTablet, onUpdate);

    props.setIsModel(true);
    // console.log(props.isModel);
  }, []);

  useEffect(() => {
    setupViewer();
  }, []);

  return (
    <div ref={canvasContainerRef} id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef} />
    </div>
  );
});

export default WebgiViewer;
