class Company < ActiveRecord::Base
  has_many :officers, dependent: :destroy
  has_many :shareholders, dependent: :destroy
  has_many :filers, dependent: :destroy
  has_many :payments, dependent: :destroy
  # has_paper_trail

  def process_tstore_and_generate_bill
    aggregate = aggregate_change_record
    puts "Aggregate; #{aggregate} \n"
    puts "Company ID: #{id}"
    active_payments = Payment.where(company_id: id).where.not(workflow_state: "completed") 
    current_payment = active_payments.empty? ? payments.create : active_payments.first
    puts "Current Payment: #{current_payment}"
    current_payment.generate_transaction_order aggregate 
    current_payment  
  end

  def aggregate_change_record
    changeset = {"reg"=>{}, "sit"=>{}, "cap"=>{}, "off"=>{}, "sha"=>{}, "fil"=>{}}
    tstore.each do |k, v|
      nk = k[0,3]
      if (%w(reg sit cap fil).include? nk)
        changeset[nk][k] = v unless (v.nil?) # && v.empty?)
      end
    end
    changeset
  end

end
