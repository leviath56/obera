# OBERA UI DSL

A minimalist Domain-Specific Language for creating user interfaces without deep HTML/CSS knowledge. OBERA enables both technical and non-technical users to build UI layouts using simple, intuitive syntax.

## Features

- Simple declarative syntax with nested components using `{}`
- Semantic styling with predefined values (small, medium, large)
- Built-in layout system (row, column, grid)
- Component library: buttons, inputs, cards, lists, etc.
- String interpolation for dynamic content

## Example

```
card {
  padding: large;
  shadow: light;

  column {
    spacing: medium;

    text {
      value: "Welcome Back";
      size: large;
      align: center;
    }

    input {
      label: "Email";
      placeholder: "Enter your email";
      fullWidth: true;
    }

    button {
      value: "Sign In";
      type: primary;
    }
  }
}
```

OBERA transpiles to HTML/CSS or React components with automatic styling based on predefined themes.
