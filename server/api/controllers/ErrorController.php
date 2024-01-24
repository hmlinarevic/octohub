<?php

namespace api\controllers;

class ErrorController
{
  /*
   * 404 not found error.
   *
   * @return json
   */
  public static function notFound($message = 'Resource not found')
  {
    http_response_code(404);

    echo json_encode($message);
  }
}
