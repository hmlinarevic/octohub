<?php

namespace api\controllers;

use api\models\CompanyModel;
use DateTime;

class CompanyController
{
  /**
   * Set headers (local development).
   *
   * @return void
   */
  public function setHeaders()
  {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
  }

  /**
   * Fetch all or recent companies and output them as JSON.
   *
   * @return void
   */
  public function getAllCompanies()
  {
    $this->setHeaders();

    $companies = CompanyModel::all();

    $recent = isset($_GET['recent']) ? $_GET['recent'] : false;

    if ($recent) {
      // calculate date two weeks ago
      $twoWeeksAgo = new DateTime();
      $twoWeeksAgo->modify('-2 weeks');

      $recentContacts = [];
      foreach ($companies as $company) {
        // convert the 'date added' to a DateTime object
        $dateAdded = DateTime::createFromFormat('Y-m-d', $company['date added']);

        // check if the 'date added' is after two weeks ago
        if ($dateAdded > $twoWeeksAgo) {
          $recentCompanies[] = $company;
        }
      }

      echo json_encode($recentCompanies);
    } else {
      echo json_encode($companies);
    }
  }

  /**
   * Search companies by name.
   *
   * @return void
   */
  public function search()
  {
    $this->setHeaders();

    $name = isset($_GET['name']) ? trim($_GET['name']) : '';

    $companies = CompanyModel::all();

    $results = [];
    foreach ($companies as $company) {
      if (stripos($company['name'], $name) !== false) {
        $results[] = $company;
      }
    }

    echo json_encode($results);
  }
}
