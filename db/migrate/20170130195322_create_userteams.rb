class CreateUserteams < ActiveRecord::Migration[5.0]
  def change
    create_table :userteams do |t|
      t.integer :user_id, null: false
      t.integer :team_id, null: false
    end
  end
end
