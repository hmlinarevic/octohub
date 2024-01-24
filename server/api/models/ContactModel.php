<?php

namespace api\models;

class ContactModel
{
  private static $contacts = [
    // contacts for Zero Innovations
    [
      'name' => 'Alice Johnson',
      'email' => 'alicej@zeroinno.net',
      'phone number' => '(202) 555-0143',
      'company' => 'Zero Innovations',
      'date added' => '2022-09-19',
    ],
    [
      'name' => 'Andrea Johnson',
      'email' => 'alicej@zeroinno.net',
      'phone number' => '(202) 555-0143',
      'company' => 'Zero Innovations',
      'date added' => '2022-09-19',
    ],
    [
      'name' => 'Bob Williams',
      'email' => 'bobw@zeroinno.net',
      'phone number' => '(202) 555-0178',
      'company' => 'Zero Innovations',
      'date added' => '2024-01-18',
    ],
    [
      'name' => 'Carol Davis',
      'email' => 'carold@zeroinno.net',
      'phone number' => '(202) 555-0234',
      'company' => 'Zero Innovations',
      'date added' => '2022-09-19',
    ],

    // contacts for Tolstoy's Brews
    [
      'name' => 'David Smith',
      'email' => 'davids@tolstoysbrews.com',
      'phone number' => '(303) 555-0198',
      'company' => "Tolstoy's Brews",
      'date added' => '2024-01-18',
    ],
    [
      'name' => 'Emma Johnson',
      'email' => 'emmaj@tolstoysbrews.com',
      'phone number' => '(303) 555-0271',
      'company' => "Tolstoy's Brews",
      'date added' => '2022-09-19',
    ],
    [
      'name' => 'Frank Brown',
      'email' => 'frankb@tolstoysbrews.com',
      'phone number' => '(303) 555-0322',
      'company' => "Tolstoy's Brews",
      'date added' => '2024-01-18',
    ],

    // contacts for Whacky Widgets
    [
      'name' => 'Grace Miller',
      'email' => 'gracem@whackywidgets.com',
      'phone number' => '(404) 555-0487',
      'company' => 'Whacky Widgets',
      'date added' => '2024-01-18',
    ],
    [
      'name' => 'Henry Davis',
      'email' => 'henryd@whackywidgets.com',
      'phone number' => '(404) 555-0536',
      'company' => 'Whacky Widgets',
      'date added' => '2024-01-18',
    ],
    [
      'name' => 'Isabella Wilson',
      'email' => 'isabellaw@whackywidgets.com',
      'phone number' => '(404) 555-0674',
      'company' => 'Whacky Widgets',
      'date added' => '2024-01-18',
    ],

    // contacts for Quantum Quirks
    [
      'name' => 'Jacob Moore',
      'email' => 'jacobm@quantumquirks.org',
      'phone number' => '(505) 555-0712',
      'company' => 'Quantum Quirks',
      'date added' => '2024-01-18',
    ],
    [
      'name' => 'Lily Johnson',
      'email' => 'lilyj@quantumquirks.org',
      'phone number' => '(505) 555-0849',
      'company' => 'Quantum Quirks',
      'date added' => '2022-09-19',
    ],
    [
      'name' => 'Mason Lee',
      'email' => 'masonl@quantumquirks.org',
      'phone number' => '(505) 555-0998',
      'company' => 'Quantum Quirks',
      'date added' => '2024-01-18',
    ],

    // contacts for Galactic Gears
    [
      'name' => 'Nora Clark',
      'email' => 'norac@galacticgears.com',
      'phone number' => '(606) 555-0114',
      'company' => 'Galactic Gears',
      'date added' => '2022-09-19',
    ],
    [
      'name' => 'Oliver Martin',
      'email' => 'oliverm@galacticgears.com',
      'phone number' => '(606) 555-0223',
      'company' => 'Galactic Gears',
      'date added' => '2024-01-18',
    ],
    [
      'name' => 'Peyton Harris',
      'email' => 'peytonh@galacticgears.com',
      'phone number' => '(606) 555-0332',
      'company' => 'Galactic Gears',
      'date added' => '2022-09-19',
    ]
  ];


  /**
   * Retrieves all contacts from the static property.
   *
   * @return array An array of all contacts
   */
  public static function all()
  {
    return self::$contacts;
  }
}
