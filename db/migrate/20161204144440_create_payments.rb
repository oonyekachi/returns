class CreatePayments < ActiveRecord::Migration
  def change
    create_table :payments do |t|
      t.string :merchantId
      t.string :serviceTypeId
      t.string :orderId
      t.string :payerName
      t.string :payerEmail
      t.string :payerPhone
      t.string :amount
      t.string :reference

      t.timestamps null: false
    end
  end
end
