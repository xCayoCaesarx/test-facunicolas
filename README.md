# CI/CD + pruebas en Playwright 🚀

Este repositorio contiene un framework de automatización de pruebas de extremo a extremo (E2E) desarrollado con **Playwright** y **TypeScript**, diseñado para ser robusto, escalable y fácil de mantener.

## 🛠 Tech Stack

*   **Engine:** [Playwright](https://playwright.dev/)
*   **Language:** TypeScript
*   **Pattern:** Page Object Model (POM)
*   **CI/CD:** GitHub Actions
*   **Reporting:** Playwright HTML Report / Artifacts

---

## 🚀 Características Principales

*   **Arquitectura POM:** Separación clara entre la lógica de las pruebas y los selectores de la interfaz de usuario.
*   **Pruebas Multi-navegador:** Ejecutandose en Chromium, pero configurable para Firefox y WebKit.
*   **Integración Continua:** Flujo de trabajo automatizado que ejecuta las pruebas en cada `push` o `pull_request` a la rama principal.
*   **Reportes Detallados:** Generación automática de reportes, configurable para incluir imagenes y videos segun se necesite.

---

## 📋 Requisitos Previos

Asegúrate de tener instalado:
*   [Node.js](https://nodejs.org/) (v18 o superior)
*   npm o yarn

---

## 🔧 Instalación y Configuración

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/facunicolas/CI-CD-Playwright.git
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Instalar los navegadores de Playwright:**
    ```bash
    npx playwright install
    ```

---

## 🏃 Ejecución de Pruebas

*   **Ejecutar todas las pruebas:**
    ```bash
    npx playwright test
    ```

*   **Ejecutar en modo encabezado (UI):**
    ```bash
    npx playwright test --ui
    ```

*   **Ejecutar un archivo específico:**
    ```bash
    npx playwright test ejemplo.spec.ts
    ```

*   **Ver el reporte de la última ejecución:**
    ```bash
    npx playwright show-report
    ```

---

## 🤖 CI/CD con GitHub Actions

El proyecto incluye un workflow en `.github/workflows/playwright.yaml` que se dispara automáticamente. 

### Detalles del Workflow:
*   **Disparadores:** `push` y `pull_request` a las ramas principales.
*   **Entorno:** Corre sobre contenedores `ubuntu-latest`.
*   **Artefactos:** En caso de fallo, el reporte de Playwright se guarda automáticamente como un artefacto de la ejecución.

> **Tip:** Puedes revisar los resultados de las corridas en la pestaña **"Actions"** de este repositorio.

---

## 📁 Estructura del Proyecto

```text
├── .github/workflows/    # Configuración de GitHub Actions
├── tests/                # Archivos de prueba (.spec.ts)
├── pages/                # Page Object Models (POM)
├── playwright.config.ts  # Configuración global de Playwright
└── package.json          # Dependencias y scripts
