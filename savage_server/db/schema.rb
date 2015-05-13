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

ActiveRecord::Schema.define(version: 20150510170842) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "encounters", force: :cascade do |t|
    t.integer  "player_id"
    t.integer  "monster_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "encounters", ["monster_id"], name: "index_encounters_on_monster_id", using: :btree
  add_index "encounters", ["player_id"], name: "index_encounters_on_player_id", using: :btree

  create_table "monsters", force: :cascade do |t|
    t.string   "name"
    t.integer  "attack"
    t.integer  "defense"
    t.integer  "hp"
    t.integer  "rarity"
    t.integer  "bounty"
    t.integer  "exp"
    t.string   "avatar"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "players", force: :cascade do |t|
    t.string   "username"
    t.string   "password_digest"
    t.string   "first_name"
    t.string   "last_name"
    t.integer  "level",           default: 1
    t.integer  "max_health",      default: 100
    t.integer  "hp",              default: 100
    t.integer  "attack",          default: 10
    t.integer  "defense",         default: 8
    t.integer  "exp",             default: 0
    t.integer  "gold",            default: 1000
    t.integer  "steps",           default: 0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
