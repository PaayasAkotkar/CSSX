# Contributing to CSSX 🚀

Welcome I am really excited that you are here to contribute to CSSX. The CSSX is a responsive and roboust design system which reduces the complexity for the responsive design and component management.

# Status 💡
<div>
1.Responsive: contains the responsive design system that includes:
<br>
               a.algortihm             -> types.ts -> key file that which useResponsive uses to delivery the resp.
  <br>
                                       -> main.ts -> contains the GenerateClamp func which is the essence of resp design. 
  <br>  
  b.services-> device     -> tracking the device pixels
                            responsive -> uses device, sizes to generate the resp;          
                                          you can neglect that resp uses the zoom or sizes too.
  <br>
                            sizes      -> wrote on the basis of to playaround
  <br>
                            zoom       -> lively track of browser-zoom
                            
        
</div>
---

### Getting Started
1.  Clone the repo.
2.  Go to `example/cssx`.
3.  Run `play.bat` to start the development environment.
4.  Check `responsive/services/responsive/use-responsive.tsx` for the primary API.

Happy coding! 🚀
