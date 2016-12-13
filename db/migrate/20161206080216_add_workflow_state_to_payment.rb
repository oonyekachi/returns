class AddWorkflowStateToPayment < ActiveRecord::Migration
  def change
    add_column :payments, :workflow_state, :string
  end
end
