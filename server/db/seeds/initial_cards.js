exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([

        { title: 'Your Tasks in Queue', body: 'Your tasks that need to be completed still are in this column', priority_id: "high", status_id: "in queue", created_by: "harsh", assigned_to: 'Harsh' },

        { title: 'Your Tasks in Progress', body: 'Your tasks that are in progress will be in this column', priority_id: 'medium', status_id: "in progress", created_by: "harsh", assigned_to: 'Harsh' },

        { title: 'Your Completed Tasks', body: 'Your tasks that are finished will be in this column', priority_id: 'low', status_id: "done", created_by: "harsh", assigned_to: 'Harsh' }

        //INCORPORATE RELATIONAL DATA TABLES IN NEXT VERSION
        // { title: 'Your Tasks in Queue', body: 'Your tasks that need to be completed still are in this column', priority_id: 3, status_id: 1, created_by: 1, assigned_to: 'Harsh' },

        // { title: 'Your Tasks in Progress', body: 'Your tasks that are in progress will be in this column', priority_id: 2, status_id: 2, created_by: 1, assigned_to: 'Harsh' },

        // { title: 'Your Completed Tasks', body: 'Your tasks that are finished will be in this column', priority_id: 1, status_id: 3, created_by: 1, assigned_to: 'Harsh' }
      ]);
    });
};