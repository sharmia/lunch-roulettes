exports.up = queryInterface => queryInterface.dropTable('whitelist_emails');

exports.down = (queryInterface, Sequelize) => queryInterface.createTable('whitelist_emails', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  created_at: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updated_at: {
    allowNull: false,
    type: Sequelize.DATE
  }
});
