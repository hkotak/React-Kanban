exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { first_name: 'Harsh', last_name: 'Kotak', email: 'hkotak.dev@gmail.com' }
      ]);
    });
};