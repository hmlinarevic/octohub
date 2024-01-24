<?php

namespace api;

use api\controllers\ErrorController;

class Router
{
  private $routes = [];

  /**
   * Register route.
   *
   * @param $method
   * @param $uri
   * @param $action
   * @return void
   */
  private function registerRoute($method, $uri, $action)
  {
    list($controller, $controllerMethod) = explode('@', $action);

    $this->routes[] = [
      'uri' => $uri,
      'method' => $method,
      'controller' => $controller,
      'controllerMethod' => $controllerMethod,
    ];
  }

  /**
   * Add a GET route.
   *
   * @param $uri
   * @param $controller
   * @return void
   */
  public function get($uri, $controller)
  {
    $this->registerRoute('GET', $uri, $controller);
  }

  /**
   * Route the request.
   *
   * @param string $uri
   * @param string $method
   * @return void
   */
  public function route($uri, $method)
  {
    foreach ($this->routes as $route) {
      if ($route['uri'] === $uri && $route['method'] === $method) {

        // extract controller and controller method
        $controller = 'api\\controllers\\' . $route['controller'];
        $controllerMethod = $route['controllerMethod'];

        // instatiate the controller and call the method
        $controllerInstance = new $controller();
        $controllerInstance->$controllerMethod();
        return;
      }
    }

    ErrorController::notFound();
  }
}
