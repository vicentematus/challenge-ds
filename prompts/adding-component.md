# Adding a New Component to fintual-ui Design System

## Example: Adding an Input component

### Step 1: Create component folder
```bash
mkdir -p packages/fintual-ds/src/components/Input
```

### Step 2: Create component file
**File:** `packages/fintual-ds/src/components/Input/Input.tsx`

```tsx
import { TextInput, StyleSheet, View, Text } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { colors, spacing, typography } from "../../tokens";

export interface InputProps {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  style?: object;
}

export function Input({
  value,
  onChangeText,
  placeholder,
  label,
  error,
  disabled = false,
  style,
}: InputProps) {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, { color: theme.text.primary }]}>
          {label}
        </Text>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.text.tertiary}
        editable={!disabled}
        style={[
          styles.input,
          {
            backgroundColor: theme.background.secondary,
            borderColor: error ? colors.semantic.error : theme.border.medium,
            color: theme.text.primary,
          },
          disabled && styles.disabled,
          style,
        ]}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  label: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.medium,
  },
  input: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: spacing.xs,
    borderWidth: 1,
    fontSize: typography.fontSizes.md,
  },
  disabled: {
    opacity: 0.5,
  },
  error: {
    color: colors.semantic.error,
    fontSize: typography.fontSizes.sm,
  },
});
```

### Step 3: Create index export
**File:** `packages/fintual-ds/src/components/Input/index.ts`

```ts
export { Input } from "./Input";
export type { InputProps } from "./Input";
```

### Step 4: Export from components index
**File:** `packages/fintual-ds/src/components/index.ts`

Add:
```ts
export { Input } from "./Input";
export type { InputProps } from "./Input";
```

### Step 5: Export from main index
**File:** `packages/fintual-ds/src/index.ts`

Add:
```ts
export { Input } from "./components/Input";
export type { InputProps } from "./components/Input";
```

### Step 6: Create Storybook story
**File:** `packages/fintual-ds/stories/Input.stories.tsx`

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../src/components/Input";

const meta = {
  title: "Forms/Input",
  component: Input,
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    value: "invalid",
    error: "Please enter a valid email",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    value: "Can't edit this",
    disabled: true,
  },
};
```

### Step 7: Test in Storybook
```bash
pnpm ds:storybook
```

### Step 8: Use in consumer app
```tsx
import { Input } from "fintual-ui";

<Input
  label="Email"
  placeholder="you@example.com"
  value={email}
  onChangeText={setEmail}
/>
```

## Files Summary

| File | Action |
|------|--------|
| `src/components/Input/Input.tsx` | CREATE |
| `src/components/Input/index.ts` | CREATE |
| `src/components/index.ts` | EDIT (add export) |
| `src/index.ts` | EDIT (add export) |
| `stories/Input.stories.tsx` | CREATE |

## Key Patterns

- **Theming:** `useTheme()` hook for dynamic colors
- **Tokens:** Import `colors`, `spacing`, `typography` from `../../tokens`
- **Styles:** `StyleSheet.create()` for cross-platform
- **Props:** Interface with defaults, pass-through `style` prop
- **Exports:** Multi-level (component folder → components index → main index)
