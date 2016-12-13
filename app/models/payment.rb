class Payment < ActiveRecord::Base
  belongs_to :company
  has_many :line_items, dependent: :destroy

  include Workflow

  workflow do
    state :new do 
      event :submit, :transitions_to => :pending
    end

    state :pending do
      event :paid, :transitions_to => :paid
    end

    state :completed do
      event :revert, :transitions_to => :pending
    end
      
  end


  def generate_transaction_order(res)
    res.each do |k, v|
      rate = Rate.where(code: k).first
      unless rate.nil?
        LineItem.find_or_create_by(rate_id: rate.id, payment_id: id)
      end
    end
  end

  #list of all attributes
    # reg_address
    # reg_address_2
    # reg_city
    # reg_state
    # reg_po
    # reg_zone
    # auth_share_capital
    # number_of_shares
    # issued_share_capital
    # paid_up_capital
    # sit_address
    # sit_address_2
    # sit_city
    # sit_state

    #surname
    #fname
    #oname
    #address
    #address2
    #nationality
    #city
    #state
    #country
    #email
    #pod
    #dob!
    #tel_number
    #occupation
    #role

    # surname
    # fname
    # oname
    # address
    # address2
    # nationality
    # city
    # state
    # country
    # holding


    # filer_surname
    # filer_fname
    # filer_oname
    # filer_accr
    # filer_address
    # filer_address_2
    # filer_city
    # filer_state
    # filer_tel_number
    # filer_email


end
