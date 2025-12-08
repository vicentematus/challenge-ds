### Prerequisitos:

- React >= 19.0.0
- React-Native-Web>=0.19.0
- pnpm 9.9.0
- node v23.9.0

## Instalacion

### Mobile (React Native)

```sh
pnpm add fintual-ui
```

### Web (React Native Web)

En un proyecto con React + Vite instalar de antemano:

```sh
pnpm create vite --template react-ts
```

Para utilizar React Native Web instalar:

```sh
pnpm add react-native-web @types/react-native-web vite-plugin-rnw react-native
```

Ir a tu vite.config.ts y usar el plugin de react-native-web:

```typescript
import { rnw } from "vite-plugin-rnw";

export default defineConfig({
  plugins: [rnw()],
});
```

## Modo de Uso

Siguiendo los pasos anteriores, en React Native o React usa la libreria asi:

```jsx
import { Text } from "fintual-ui";

function MyComponent() {
  return <Text color="primary">Hola, soy Fintualist</Text>;
}
```

## Estructura

```
packages/
├── fintual-ds // storybook + expo. Compila para React Native (mobile) y React Native Web (desktop)
├── mobile // 👈 contiene un proyecto de expo starter
└── web // react + vite + react-native-web

```

## Desarrollo.

Parti buscando por referencias visuales del design system de Fintual, [y encontre esto](https://www.figma.com/design/WJqsTyEbPsCa0uHVF6TBQh/Fin-DS-System?node-id=0-1&t=ZOpMe1MjwLZSxzov-1).

El problema fue encontrar donde debería partir para armar algo cross-platform. Para web (React) y mobile (React Native) son environments distintos. Por lo que hay buscar algo en común.

Hay 2 build pipelines que se encargan de hacer lo siguiente:

```bash
fintual-design-system -> compilar ->📱 mobile (react native)
                              -> 🖥️ web (react)
```

¿Pero que usamos para el design system? Pense en una misma codebase que sirviera para ambas plataformas. En este caso utilizé Expo + React-native-web para poder hacer una libreria que sea cross-platform.

Al principio fue confuso entender cómo distribuir de una misma codebase para React y React Native. Ambos son ambientes distintos.

La razón de por que utilizé react-native-web es la siguiente: de una mismo componente, debería poder distribuirse a mobile y desktop.

Elegí react-native-web ya qué conocía que [Bluesky (alternativa de X)](https://bsky.app/) lo utilizaba. También es la solución más popular para cross-platform. Lo utilizan también X/Twitter o Meta [según la documentación oficial.](https://necolas.github.io/react-native-web/docs/about-project/)

Hay una librería oficial de React interesante que se llama [React Strict DOM](https://facebook.github.io/react-strict-dom/), que busca estandarizar UIs entre React y React Native. Pero todavía esta en desarrollo.

## Suposiciones

Asumiendo que Fintual está en React Native, y debe ser una codebase con más de 5 años de antiguedad, la cantidad de componentes debe ser inmensa.

La aplicación web la sacaron hace un tiempo atrás (unknown ETA), pero el uso debe ser menor a la app.

Al inicio, claro puedes hacer algo cómo:

```bash
components/
└── label/
    ├── label.tsx
    └── label.native.tsx
```

Pero si la codebase va creciendo a través de los años, vas a tener que duplicar código para el mismo componente.

```bash
components
  label
    label.tsx
    label.native.tsx // 🤔 ok está bien duplicarlo al inicio...
  button
    label.tsx
    label.native.tsx // 👈 tengo que duplicarlo...
  card
    card.tsx
    card.native.tsx // ⚠️ again ...
  accordion
    accordion.tsx
    accordion.native.tsx // 🚨 again and again...
```

Asumiendo lo anterior el core es la aplicación mobile. Es por eso que elegí `react-native-web`. una librería de componentes la idea es que solo exista 1 código, para ambas plataformas.

## Limitaciones

Después de una investigación sobre librerias que son cross-platform, cómo [tamagui](https://tamagui.dev/) o [gluestack](https://gluestack.io/), encontre ciertas limitaciones.

En primer lugar, todas las librerias de componentes que son cross-platform siempre te van a pedir instalar su "compiler" para adaptarlo a web. Por ejemplo, **en mi solución te pido de antemano instalar react-native-web**. Tamagui [te pide instalar su "compiler" para empezar a usarlo](https://tamagui.dev/docs/intro/compiler-install#nextjs). [Gluestack también](https://gluestack.io/ui/docs/home/getting-started/installation#manual:~:text=CLI-,Manual,-Step%201%3A%20Setup).

Esto es anécdotico pero buscando en stackoverflow o reddit, `react-native-web` para features más complejas tiene sus limitaciones. Algunas librerias de React no funcionan como se espera, etc.

Pude haber hecho un Github Action para publicar la libreria cuando se pushee / PR a main, pero no me dio por tiempo. Actualmente corro pnpm run ds:publish para publicarla.

El codigo puede mejorar bastante.

## Conclusión

Quizás al final del día lo más simple fue tener 2 build pipelines distintos, y simplemente tener un componente de React, y otro de React Native...

```bash
components
  label
    label.tsx
    label.native.tsx // 😔 está bien duplicarlo...
```

Pero eso se lo dejamos a los jueces de la takehome...
