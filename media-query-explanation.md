## CSS Media Query Issue Resolution

The issue with the `.sample-container` styles in media queries was caused by inconsistent media query syntax in the CSS file. Here's what was fixed:

1. The media query syntax was inconsistent between different breakpoints:
   - At 600px it used `@media (max-width: 600px)`
   - At 1500px it used `@media screen and (max-width: 1500px)`

2. The `screen and` part was unnecessary and could potentially cause inconsistency in how browsers interpret the media queries. We standardized all media queries to use the simpler syntax:
   - `@media (max-width: VALUE)`

3. This standardization ensures that:
   - The media queries are more consistent
   - They follow the same pattern throughout the codebase
   - They are more maintainable
   - They will be interpreted the same way across different browsers

Now the styles for `.sample-container` should apply correctly at both breakpoints.