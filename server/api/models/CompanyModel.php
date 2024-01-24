<?php

namespace api\models;

class CompanyModel
{
  private static $companies = [
    [
      'name' => 'Zero Innovations',
      'address' => '123 Tech Lane, Innovation City, CA 94016',
      'email' => 'contact@zeroinno.net',
      'date added' => '2022-10-21',
    ],
    [
      'name' => "Tolstoy's Brews",
      'address' => '456 Literary St, Novel Town, NY 10010',
      'email' => 'info@tolstoysbrews.com',
      'date added' => '2024-01-16',
    ],
    [
      'name' => 'Whacky Widgets',
      'address' => '789 Gadget Ave, Widgetville, TX 75001',
      'email' => 'support@whackywidgets.com',
      'date added' => '2022-10-21',
    ],
    [
      'name' => 'Quantum Quirks',
      'address' => '101 Quantum Road, Quirkburg, MA 02101',
      'email' => 'hello@quantumquirks.org',
      'date added' => '2024-01-16',
    ],
    [
      'name' => 'Galactic Gears',
      'address' => '202 Spaceport Loop, Cosmos City, FL 33101',
      'email' => 'inquiry@galacticgears.com',
      'date added' => '2022-10-21',
    ]
  ];

  /**
   * Retrieves all companies from the static property.
   *
   * @return array An array of all companies
   */
  public static function all()
  {
    return self::$companies;
  }
}
