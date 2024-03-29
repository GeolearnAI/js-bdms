import {
  fetch
} from './index';

export function loadUser(){
  return fetch(
    '/user',
    {
      type: 'GET'
    }
  );
}

export function createUser(
  username,
  password,
  firstname = '',
  middlename = '',
  lastname = '',
  admin = false
){
  return fetch(
    '/user/edit',
    {
      action: 'CREATE',
      username: username,
      password: password,
      firstname: firstname,
      middlename: middlename,
      lastname: lastname,
      admin: admin
    }
  );
}

export function updateUser(
  id,
  username,
  password,
  firstname = '',
  middlename = '',
  lastname = '',
  admin = false
){
  return fetch(
    '/user/edit',
    {
      action: 'UPDATE',
      user_id: id,
      username: username,
      password: password,
      firstname: firstname,
      middlename: middlename,
      lastname: lastname,
      admin: admin
    }
  );
}

export function enableUser(id){
  return fetch(
    '/user/edit',
    {
      action: 'ENABLE',
      id: id
    }
  );
}

export function disableUser(id){
  return fetch(
    '/user/edit',
    {
      action: 'DISABLE',
      id: id
    }
  );
}

export function deleteUser(id){
  return fetch(
    '/user/edit',
    {
      action: 'DELETE',
      id: id
    }
  );
}

export function checkUsername(username){
  return fetch(
    '/user/edit',
    {
      type: 'CHECK',
      username: username
    }
  );
}

export function listUsers(){
  return fetch(
    '/user/edit',
    {
      type: 'LIST'
    }
  );
}
