

namespace :clean do
        desc "find and delete events bookmarks and registrations"
    task :event,[:id] => :environment do
        id = args[:id]
        Registration.find_by(eventId:id).destroy_all
        Bookmark.find_by(eventId:id).destroy_all
    end
        desc "ping all sites single threadedly"
    task :sync => :environment do
        PingAllSyncJob.new.perform()
    end
end

namespace :clean do
    desc "delete all pings older than parameter. Call like clean:older_than[30] to delete all older than 30 days"
    task :older_than,[:day] => :environment do |t,args|
        days = args[:day].to_i
        RemoveOldPingsJob.new.perform(days)
    end

    desc "delete all pings older than now"
    task :now,[:day] => :environment do |t,args|
        puts args[:day].to_i==2
        RemoveOldPingsJob.new.perform(0)
    end

    desc "delete all pings older than 1 day"
    task :day => :environment do
        puts "this"
        RemoveOldPingsJob.new.perform(1)
    end

    desc "delete all pings older than 30 days"
    task :month => :environment do
        puts "this"
        RemoveOldPingsJob.new.perform(30)
    end
end
