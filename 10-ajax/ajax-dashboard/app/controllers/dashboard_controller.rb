class DashboardController < ApplicationController
  def brother
    brother = %w{ Groucho Harpo Chico Gummo Zeppo Chunko }.sample
    render :plain => brother
  end

  def time
    render :plain => Time.now
  end

  def uptime
    uptime = `uptime` # Backticks won't work on Heroku
    render :plain => uptime
  end

  def info
    brother = %w{ Groucho Harpo Chico Zeppo Gummo }.sample
    time = Time.now
    uptime = `uptime`

    info = {
      :brother => brother,
      :time => time,
      :uptime => uptime,
      :fortune => `fortune`
    }

    render :json => info
  end
end
