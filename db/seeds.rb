# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
ActiveRecord::Base.connection.execute("SELECT SETVAL('users_id_seq', 1)")
Rate.delete_all
ActiveRecord::Base.connection.execute("SELECT SETVAL('rates_id_seq', 1)")
Company.delete_all
ActiveRecord::Base.connection.execute("SELECT SETVAL('companies_id_seq', 1)")
Help.delete_all
ActiveRecord::Base.connection.execute("SELECT SETVAL('helps_id_seq', 1)")

config = YAML::load_file(File.join(Rails.root, 'db', 'seeds.yml'))
User.create(config["users"])
Rate.create(config["rates"])
Company.create(config["companies"])
Help.create(config["helps"])