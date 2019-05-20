module Api
  class WorkoutsController < ActionController::API
    def show
      render json: {success: 'true' }
    end
  end
end
