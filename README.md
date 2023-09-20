# Angular Starter Project

A robust Angular starter kit featuring an Admin panel, Login, a default layout, and a suite of usable UI components. Enhanced with a cookie-based authentication service and state, API, and facade services that are generic and easily implementable. Perfectly styled with Tailwind for modern and responsive designs.

## Features

- **Admin Panel**: Comprehensive dashboard with all the essential functionalities you need.
- **Login & Authentication**: Seamless user login with cookie-based requests using the built-in Auth Service.
- **Layouts**: Includes Admin, Login, and Default layouts.
- **UI Components**:
  - **Reactive FormFields**: Easily integrate reactive forms in your applications.
  - **Data Table**: Display your data in a clean and structured table format.
  - **Autocomplete Field**: Built-in autocomplete functionality to enhance user experience.
- **Tailwind Integration**: Style your app with one of the most popular CSS frameworks.
- **State, API & Facade Services**:
  - Generic services to aid in state management, interacting with APIs, and establishing a facade for cleaner and more maintainable code.
  - Especially designed to work smoothly with the Data Table, lists, and autocomplete fields.

## Getting Started

1. **Clone the repository**:

```
sh git clone https://github.com/mariandeimel/angular-starter.git
```

2. **Navigate to the project directory**:

```
sh cd angular-starter
```

3. **Install the dependencies**:

```
sh npm install
```

4. **Run the application**:

```
sh ng serve
```

5. **Navigate to http://localhost:4200/.**
   The app will automatically reload if you change any of the source files.

# Documentation

## Layouts

- **Admin Layout**: Located at src/app/core/layouts/admin
- **Login Layout**: Located at src/app/core/layouts/login
- **Default Layout**: Located at src/app/core/layouts/default

## Services

- **Auth Service**: Handles cookie-based authentication. Check it out at src/app/core/services/auth.service.ts.
- **State Service**: Generic state management service located at src/app/core/services/state.service.ts.
- **API Service**: Generic API handler service at src/app/core/services/api.service.ts.
- **Facade Service**: Clean up your component logic using the facade pattern with the help of src/app/core/services/facade.service.ts.

Components

All UI components can be found under src/app/components. This includes the Reactive FormFields, Data Table, and Autocomplete field components.
Contributing

Contributions are welcome! Please read our CONTRIBUTING.md for details on how to contribute and the process for submitting pull requests to us.
License

This project is licensed under the MIT License. See the LICENSE.md file for details.

```

```
