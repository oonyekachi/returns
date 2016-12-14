class CreateSubmissions < ActiveRecord::Migration
  def change
    create_table :submissions do |t|
      t.integer :company_id
      t.integer :filer_id
      t.string :submission_type
      t.date :start_date
      t.date :end_date

      t.timestamps null: false
    end
  end
end
