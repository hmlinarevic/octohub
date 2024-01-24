<?php

namespace api\controllers;

use api\models\ContactModel;
use DateTime;

class ContactController
{
  /**
   * Set headers (local development).
   *
   * @return void
   */
  private function setHeaders()
  {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
  }

  /**
   * Fetch all or recent contacts and output them as JSON.
   *
   * @return void
   */
  public function getAllContacts()
  {
    $this->setHeaders();

    $contacts = ContactModel::all();

    $recent = isset($_GET['recent']) ? $_GET['recent'] : false;

    if ($recent) {
      // calculate date two weeks ago
      $twoWeeksAgo = new DateTime();
      $twoWeeksAgo->modify('-2 weeks');

      $recentContacts = [];
      foreach ($contacts as $contact) {
        // convert the 'date added' to a DateTime object
        $dateAdded = DateTime::createFromFormat('Y-m-d', $contact['date added']);

        // check if the 'date added' is after two weeks ago
        if ($dateAdded > $twoWeeksAgo) {
          $recentContacts[] = $contact;
        }
      }

      echo json_encode($recentContacts);
    } else {
      echo json_encode($contacts);
    }
  }

  /**
   * Search contacts by name or by company.
   *
   * @return void
   */
  public function search()
  {
    $this->setHeaders();

    $contacts = ContactModel::all();

    $name = isset($_GET['name']) ? trim($_GET['name']) : '';
    $company = isset($_GET['company']) ? trim($_GET['company']) : '';

    $results = [];
    if ($name) {
      foreach ($contacts as $contact) {
        if (stripos($contact['name'], $name) !== false) {
          $results[] = $contact;
        }
      }
    }

    if ($company) {
      foreach ($contacts as $contact) {
        if (stripos($contact['company'], $company) !== false) {
          $results[] = $contact;
        }
      }
    }

    echo json_encode($results);
  }
}
