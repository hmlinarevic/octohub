<?php

require __DIR__ . '/../vendor/autoload.php';
require '../helpers.php';

use api\Router;

// istatiate the router
$router = new Router();

// register routes
require basePath('routes.php');

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

$router->route($uri, $method);