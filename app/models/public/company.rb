class Company < ActiveRecord::Base
  has_many :officers, dependent: :destroy
  has_many :shareholders, dependent: :destroy
  has_many :filers, dependent: :destroy
  has_many :payments, dependent: :destroy
  has_many :submissions, dependent: :destroy
  # has_paper_trail

  def process_tstore_and_generate_bill
    aggregate = aggregate_change_record
    curr = current_payment
    curr.generate_transaction_order aggregate 
    curr  
  end

  def current_payment
    active_payments = Payment.where(company_id: id).where.not(workflow_state: "completed") 
    curr = active_payments.empty? ? payments.create : active_payments.first
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

  def commit_tstore_details

  end

  def submission_status
    ret = {returns: false, accounts: false}
    last_returns = submissions.where(submission_type: "returns").first
    last_accounts = submissions.where(submission_type: "accounts").first
    ret[:returns] = last_returns.end_date < Date.today unless last_returns.nil?
    ret[:accounts] = last_accounts.end_date < Date.today unless last_accounts.nil?
    ret
  end

end
