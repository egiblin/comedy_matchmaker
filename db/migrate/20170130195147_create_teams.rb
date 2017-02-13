class CreateTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :teams do |t|
      t.string :name, null: false
      t.string :team_photo, null: false
      t.string :location
    end
  end
end
