# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161229151522) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string   "name"
    t.string   "authorization_code"
    t.integer  "rc_number"
    t.integer  "company_type_id"
    t.date     "incorporation_date"
    t.boolean  "email_reminder"
    t.text     "registered_office_address"
    t.string   "registered_office_city"
    t.string   "registered_office_state"
    t.date     "annual_return_date"
    t.date     "accounts_date"
    t.datetime "created_at",                                         null: false
    t.datetime "updated_at",                                         null: false
    t.integer  "auth_share_capital",          limit: 8
    t.integer  "number_of_shares",            limit: 8
    t.decimal  "share_price"
    t.integer  "issued_share_capital",        limit: 8
    t.integer  "paid_up_capital",             limit: 8
    t.string   "registered_office_address_2"
    t.string   "registered_office_po"
    t.string   "situation_address"
    t.string   "situation_address_2"
    t.string   "situation_city"
    t.string   "situation_state"
    t.string   "email"
    t.string   "zonal_office"
    t.jsonb    "tstore",                                default: {}, null: false
  end

  add_index "companies", ["tstore"], name: "index_companies_on_tstore", using: :gin

  create_table "filers", force: :cascade do |t|
    t.string   "surname"
    t.string   "first_name"
    t.string   "other_names"
    t.string   "accreditation_number"
    t.string   "address"
    t.string   "address_2"
    t.string   "city"
    t.string   "filer_state"
    t.string   "tel_number"
    t.string   "email"
    t.date     "filer_date"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  create_table "helps", force: :cascade do |t|
    t.text     "description"
    t.string   "description_type"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "line_items", force: :cascade do |t|
    t.integer  "rate_id"
    t.integer  "payment_id"
    t.integer  "quantity",   default: 1
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "officers", force: :cascade do |t|
    t.string   "surname"
    t.string   "first_name"
    t.string   "other_names"
    t.string   "nationality"
    t.date     "dob"
    t.string   "tel_number"
    t.text     "residential_address"
    t.string   "residential_address_city"
    t.string   "residential_address_state"
    t.string   "residential_address_pob"
    t.string   "residential_address_country"
    t.string   "email"
    t.string   "occupation"
    t.text     "particulars_of_other_directorship"
    t.string   "role"
    t.integer  "company_id"
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
  end

  create_table "payments", force: :cascade do |t|
    t.string   "merchantId"
    t.string   "serviceTypeId"
    t.string   "orderId"
    t.string   "payerName"
    t.string   "payerEmail"
    t.string   "payerPhone"
    t.string   "amount"
    t.string   "reference"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.integer  "company_id"
    t.string   "workflow_state"
  end

  create_table "rates", force: :cascade do |t|
    t.string   "description"
    t.decimal  "amount"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "code"
  end

  create_table "shareholders", force: :cascade do |t|
    t.string   "surname"
    t.string   "first_name"
    t.string   "other_names"
    t.string   "nationality"
    t.date     "dob"
    t.string   "residential_address"
    t.string   "residential_address_city"
    t.string   "residential_address_state"
    t.string   "residential_address_country"
    t.decimal  "holding"
    t.integer  "company_id"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  create_table "submissions", force: :cascade do |t|
    t.integer  "company_id"
    t.integer  "filer_id"
    t.string   "submission_type"
    t.date     "start_date"
    t.date     "end_date"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "synchromesh_connections", force: :cascade do |t|
    t.string   "channel"
    t.string   "session"
    t.datetime "created_at"
    t.datetime "expires_at"
    t.datetime "refresh_at"
  end

  create_table "synchromesh_queued_messages", force: :cascade do |t|
    t.text    "data"
    t.integer "connection_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "versions", force: :cascade do |t|
    t.string   "item_type",  null: false
    t.integer  "item_id",    null: false
    t.string   "event",      null: false
    t.string   "whodunnit"
    t.text     "object"
    t.datetime "created_at"
  end

  add_index "versions", ["item_type", "item_id"], name: "index_versions_on_item_type_and_item_id", using: :btree

end
