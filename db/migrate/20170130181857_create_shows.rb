class CreateShows < ActiveRecord::Migration[5.0]
  def change
    create_table :shows do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.date :date, null: false
      t.string :time, null: false
      t.float :duration, null: false
      t.integer :slots, null: false
      t.string :creator, null: false

      t.timestamps
    end
  end
end
