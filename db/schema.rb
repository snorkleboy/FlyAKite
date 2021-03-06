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

ActiveRecord::Schema.define(version: 20180311194741) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookmarks", force: :cascade do |t|
    t.integer "userId"
    t.integer "eventId"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["userId", "eventId"], name: "index_bookmarks_on_userId_and_eventId", unique: true
  end

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.integer "userId", null: false
    t.string "name", null: false
    t.datetime "startDate", null: false
    t.datetime "endDate"
    t.text "header", null: false
    t.text "description", null: false
    t.text "imgURL", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "city"
    t.integer "areaCode", null: false
    t.string "state"
    t.integer "categoryId", null: false
    t.integer "price"
    t.string "stripeKey"
    t.index ["startDate"], name: "index_events_on_startDate"
    t.index ["userId"], name: "index_events_on_userId"
  end

  create_table "registrations", force: :cascade do |t|
    t.integer "userId", null: false
    t.integer "eventId", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "stripeEmail"
    t.string "stripeKey"
    t.index ["userId", "eventId"], name: "index_registrations_on_userId_and_eventId", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "stripeKey"
    t.index ["username"], name: "index_users_on_username"
  end

end
