class AddTeamShowToTeams < ActiveRecord::Migration[5.0]
  def change
    add_column :teams, :team_photo, :string
  end
end
