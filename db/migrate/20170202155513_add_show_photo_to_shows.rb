class AddShowPhotoToShows < ActiveRecord::Migration[5.0]
  def change
    add_column :shows, :show_photo, :string
  end
end
