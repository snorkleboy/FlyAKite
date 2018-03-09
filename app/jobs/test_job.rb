class TestJob < ApplicationJob
  queue_as :default

  def perform(*args)
    guestUser1 = User.create(username: 'guest123123', password: 'password')
    puts guestUser1
    puts args
  end
  TestJob.perform_now('world')
end
