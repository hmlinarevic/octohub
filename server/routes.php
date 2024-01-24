<?php

$router->get('/contacts', 'ContactController@getAllContacts');
$router->get('/contacts/search', 'ContactController@search');

$router->get('/companies', 'CompanyController@getAllCompanies');
$router->get('/companies/search', 'CompanyController@search');
