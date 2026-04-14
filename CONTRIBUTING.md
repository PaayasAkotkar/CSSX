# Contributing to CSSX 🚀

Welcome I am really excited that you are here to contribute to CSSX. The CSSX is a responsive and roboust design system which reduces the complexity for the responsive design and component management.

## Status 💡

The **Responsive** design system is organized into two main parts:

- **Algorithm**
    - `types.ts`: The configuration hub that `useResponsive` relies on for delivery.
    - `main.ts`: Contains the `GenerateClamp` function—the essence of the responsive design.
- **Services**
    - `device`: Handles live tracking of device pixels and viewport metrics.
    - `responsive`: The primary service that coordinates `device`  to generate layouts.
    - `sizes`: A flexible implementation developed for experimentation and testing.
    - `zoom`: Provides real-time tracking of browser-level scaling and zoom events.

---

### Getting Started
1.  Clone the repo.
2.  Go to `example/cssx`.
3.  Run `play.bat` to start the development environment.
4.  Check `responsive/services/responsive/use-responsive.tsx` for the primary API.

Happy coding! 🚀
