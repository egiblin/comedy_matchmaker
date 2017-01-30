class CreateTeamshows < ActiveRecord::Migration[5.0]
  def change
    create_table :teamshows do |t|
      t.integer :team_id, null: false
      t.integer :show_id, null: false
    end
  end
end
