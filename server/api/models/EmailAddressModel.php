<?php

namespace api\models;

class EmailAddressModel
{
  static $emailAddresses = [
    [
      'id' => 1,
      'contactId' => 3,
      'addresses' => [
        'work' => 'bobw@zeroinno.net',
        'home' => 'bobw@example.net',
      ]
    ],
    [
      'id' => 2,
      'contactId' => 4,
      'addresses' => [
        'work' => 'carold@zeroinno.net',
        'home' => 'carold@example.net',
      ]
    ],
    [
      'id' => 3,
      'contactId' => 6,
      'addresses' => [
        'work' => 'emmaj@tolstoysbrews.com',
        'home' => 'emmaj@example.net',
      ]
    ],
    [
      'id' => 4,
      'contactId' => 16,
      'addresses' => [
        'work' => 'peytonh@galacticgears.com',
        'home' => 'peytonh@example.net',
      ]
    ],
    [
      'id' => 5,
      'contactId' => 15,
      'addresses' => [
        'work' => 'oliverm@galacticgears.com',
        'home' => 'oliverm@example.net',
      ]
    ],
    [
      'id' => 6,
      'contactId' => 13,
      'addresses' => [
        'work' => 'masonl@quantumquirks.org',
        'home' => 'masonl@example.net',
      ]
    ],
    [
      'id' => 7,
      'contactId' => 14,
      'addresses' => [
        'work' => 'norac@galacticgears.com',
        'home' => 'norac@example.net',
      ]
    ],
    [
      'id' => 8,
      'contactId' => 1,
      'addresses' => [
        'work' => 'alicej@zeroinno.net',
        'home' => 'alicej@example.net',
      ]
    ],
    [
      'id' => 9,
      'contactId' => 2,
      'addresses' => [
        'work' => 'andrea@zeroinno.net',
        'home' => 'andrea@example.net',
      ]
    ],
    [
      'id' => 10,
      'contactId' => 5,
      'addresses' => [
        'work' => 'davids@tolstoysbrews.com',
        'home' => 'davids@example.net',
      ]
    ],
    [
      'id' => 11,
      'contactId' => 8,
      'addresses' => [
        'work' => 'gracem@whackywidgets.com',
        'home' => 'gracem@example.net',
      ]
    ],
    [
      'id' => 12,
      'contactId' => 11,
      'addresses' => [
        'work' => 'jacobm@quantumquirks.org',
        'home' => 'jacobm@example.net',
      ]
    ],
    [
      'id' => 13,
      'contactId' => 12,
      'addresses' => [
        'work' => 'lilyj@quantumquirks.org',
        'home' => 'lilyj@example.net',
      ]
    ],
    [
      'id' => 14,
      'contactId' => 7,
      'addresses' => [
        'work' => 'frankb@tolstoysbrews.com',
        'home' => 'frankb@example.net',
      ]
    ],
    [
      'id' => 15,
      'contactId' => 9,
      'addresses' => [
        'work' => 'henryd@whackywidgets.com',
        'home' => 'henryd@example.net',
      ]
    ],
    [
      'id' => 16,
      'contactId' => 10,
      'addresses' => [
        'work' => 'isabellaw@whackywidgets.com',
        'home' => 'isabellaw@example.net',
      ]
    ],
  ];

  /**
   * Retrieves an email address relative to contact's id.
   *
   * @param $id
   * @param $preferredEmailAddress
   * @return string A preferred contact's email address
   */
  public static function find($id, $preferredEmailAddress)
  {
    $emails = self::$emailAddresses;

    foreach ($emails as $email) {
      $isMatch = $id === $email['contactId'];

      if ($isMatch) {
        return $email['addresses'][$preferredEmailAddress];
      }
    }
  }
}
