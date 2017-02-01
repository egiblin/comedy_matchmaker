<div class="title-bar">
  <nav class="top-bar horizontal" data-topbar role="navigation">
    <ul class="title-area">
      <li class="name">
        <h1><a href="#">Comedy Matchmaker</a></h1>
      </li>
       <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
    </ul>

    <section class="top-bar-section">
      <!-- Right Nav Section -->
      <ul class="top-bar right">
        <li class="active"><a href="Shows">Shows</a></li>
        <li>
          <% if user_signed_in? %>
              <ul class="dropdown menu" data-dropdown-menu>
                <li>
                <%= link_to current_user.email, user_path(current_user.id) %>
                  <ul class="menu">
                    <% if current_user.admin == true  %>
                    <li><%= link_to 'View All Users', users_path, :class => 'navbar-link' %></li>
                    <% end %>
                    <li><%= link_to 'Edit profile', edit_user_registration_path, :class => 'navbar-link' %></li>
                    <li><%= link_to "Logout", destroy_user_session_path, method: :delete, :class => 'navbar-link' %></li>
                  </ul>
                </li>
            <% else %>
          <span><%= link_to "Sign up", new_user_registration_path, :class => 'navbar-link'  %></span><!--
              --><span><%= link_to "Login", new_user_session_path, :class => 'navbar-link'  %></span>
            <% end %>
        </ul>
        </li>
        <li>
          <a href="#" data-dropdown="hover1" data-options="is_hover:true; hover_timeout:5000">Has Hover Dropdown</a>
          <ul id="hover1" class="f-dropdown" data-dropdown-content>
            <li><a href="#">This is a link</a></li>
            <li><a href="#">This is another</a></li>
            <li><a href="#">Yet another</a></li>
          </ul>
        </li>
        <li class="divider"></li>
        <li class="has-form">
          <div class="row collapse">
            <ul class="menu">
              <%= form_tag(root_path, :method => "get", id: "search-form") do %>
                <li><%= text_field_tag :search, params[:search], placeholder: "Search Comedy" %></li>
              <% end %>
            </ul>
          </div>
        </li>
      </ul>

      <!-- Left Nav Section -->
      <ul class="top-bar left">
        <li><a href="#">Teams</a></li>
        <li><a href="#">Performers</a></li>
      </ul>
    </section>
  </nav>
</div>
