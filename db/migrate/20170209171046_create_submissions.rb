class CreateSubmissions < ActiveRecord::Migration[5.0]
  def change
    create_table :submissions do |t|
      t.text :pitch
      t.boolean :improv, default: false
      t.boolean :selected, default: false
      t.belongs_to :user, null: false
      t.belongs_to :show, null: false
      t.belongs_to :team
    end
  end
end
