import testRoutes from './testapis'; 
import prodRoutes from './prodapis'; 

let routes = [];

testRoutes.forEach(route => {
    routes.push(route);
});

prodRoutes.forEach(route => {
   routes.push(route);
});

export default routes;