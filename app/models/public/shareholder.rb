class Shareholder < ActiveRecord::Base
  belongs_to :company
  # has_paper_trail
end
