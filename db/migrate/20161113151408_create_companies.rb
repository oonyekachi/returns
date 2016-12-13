class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name
      t.string :authorization_code
      t.integer :rc_number
      t.integer :company_type_id
      t.date :incorporation_date
      t.boolean :email_reminder
      t.text :registered_office_address
      t.string :registered_office_city
      t.string :registered_office_state
      t.date :annual_return_date
      t.date :accounts_date

      t.timestamps null: false
    end
  end
end
