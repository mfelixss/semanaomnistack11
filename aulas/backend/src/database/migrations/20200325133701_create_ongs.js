
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
         //aqui pode vir a dar algum erro, nao sei se roduo com aspas na palavra city
        table.string('city').notNullable(); 
        table.string('uf', 2).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
