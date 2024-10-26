namespace :sitemap do
  desc "Update the sitemap"
  task :update => :environment do
    # Code to update the sitemap
    Rake::Task["sitemap:refresh"].invoke
  end
end
