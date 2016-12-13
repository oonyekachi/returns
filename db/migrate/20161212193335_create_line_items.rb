class CreateLineItems < ActiveRecord::Migration
  def change
    create_table :line_items do |t|
      t.integer :rate_id
      t.integer :payment_id
      t.integer :quantity, default: 1

      t.timestamps null: false
    end
  end
end
