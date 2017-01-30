class CreateUsershows < ActiveRecord::Migration[5.0]
  def change
    create_table :usershows do |t|
      t.integer :user_id, null: false
      t.integer :show_id, null: false
    end
  end
end
