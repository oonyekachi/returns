class CreateHelps < ActiveRecord::Migration
  def change
    create_table :helps do |t|
      t.text :description
      t.string :description_type

      t.timestamps null: false
    end
  end
end
