<?php

namespace api\models;

use api\models\EmailAddressModel;

class ContactModel
{
  private static $preferEmailAddress = 'work';

  private static $contacts = [
    // contacts for Zero Innovations
    [
      'id' => 1,
      'name' => 'Alice Johnson',
      'phone number' => '(202) 555-0143',
      'company' => 'Zero Innovations',
      'date added' => '2022-09-19',
    ],
    [
      'id' => 2,
      'name' => 'Andrea Johnson',
      'phone number' => '(202) 555-0143',
      'company' => 'Zero Innovations',
      'date added' => '2022-09-19',
    ],
    [
      'id' => 3,
      'name' => 'Bob Williams',
      'phone number' => '(202) 555-0178',
      'company' => 'Zero Innovations',
      'date added' => '2024-01-18',
    ],
    [
      'id' => 4,
      'name' => 'Carol Davis',
      'phone number' => '(202) 555-0234',
      'company' => 'Zero Innovations',
      'date added' => '2022-09-19',
    ],

    // contacts for Tolstoy's Brews
    [
      'id' => 5,
      'name' => 'David Smith',
      'phone number' => '(303) 555-0198',
      'company' => "Tolstoy's Brews",
      'date added' => '2024-01-18',
    ],
    [
      'id' => 6,
      'name' => 'Emma Johnson',
      'phone number' => '(303) 555-0271',
      'company' => "Tolstoy's Brews",
      'date added' => '2022-09-19',
    ],
    [
      'id' => 7,
      'name' => 'Frank Brown',
      'phone number' => '(303) 555-0322',
      'company' => "Tolstoy's Brews",
      'date added' => '2024-01-18',
    ],

    // contacts for Whacky Widgets
    [
      'id' => 8,
      'name' => 'Grace Miller',
      'phone number' => '(404) 555-0487',
      'company' => 'Whacky Widgets',
      'date added' => '2024-01-18',
    ],
    [
      'id' => 9,
      'name' => 'Henry Davis',
      'phone number' => '(404) 555-0536',
      'company' => 'Whacky Widgets',
      'date added' => '2024-01-18',
    ],
    [
      'id' => 10,
      'name' => 'Isabella Wilson',
      'phone number' => '(404) 555-0674',
      'company' => 'Whacky Widgets',
      'date added' => '2024-01-18',
    ],

    // contacts for Quantum Quirks
    [
      'id' => 11,
      'name' => 'Jacob Moore',
      'phone number' => '(505) 555-0712',
      'company' => 'Quantum Quirks',
      'date added' => '2024-01-18',
    ],
    [
      'id' => 12,
      'name' => 'Lily Johnson',
      'phone number' => '(505) 555-0849',
      'company' => 'Quantum Quirks',
      'date added' => '2022-09-19',
    ],
    [
      'id' => 13,
      'name' => 'Mason Lee',
      'phone number' => '(505) 555-0998',
      'company' => 'Quantum Quirks',
      'date added' => '2024-01-18',
    ],

    // contacts for Galactic Gears
    [
      'id' => 14,
      'name' => 'Nora Clark',
      'phone number' => '(606) 555-0114',
      'company' => 'Galactic Gears',
      'date added' => '2022-09-19',
    ],
    [
      'id' => 15,
      'name' => 'Oliver Martin',
      'phone number' => '(606) 555-0223',
      'company' => 'Galactic Gears',
      'date added' => '2024-01-18',
    ],
    [
      'id' => 16,
      'name' => 'Peyton Harris',
      'phone number' => '(606) 555-0332',
      'company' => 'Galactic Gears',
      'date added' => '2022-09-19',
    ]
  ];

  /**
   * Retrieves all contacts with preferred email addresses.
   *
   * @return array An array of all contacts
   */
  public static function all()
  {
    $results = [];

    // email lookup
    foreach (self::$contacts as $contact) {
      // find the related email address
      $email = EmailAddressModel::find(
        $contact['id'],
        self::$preferEmailAddress
      );

      // copy fields and add a new 'email' field
      $contactWithEmail = array_merge($contact, ['email' => $email]);
      $results[] = $contactWithEmail;
    }

    return $results;
  }
}
