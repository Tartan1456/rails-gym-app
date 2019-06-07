module Api
  class WorkoutsController < ActionController::API
    before_action :get_workout_days, only: :index
    before_action :find_workout_day, only: :show

    def index
      render json: format_workout_days
    end

    def show
      render json: format_workout_day
    end

    private

    def get_workout_days
      @workouts = WorkoutDay.all.limit(10);
    end

    def format_workout_days
      @workouts.map { |day| {
        id: day.id,
        date: day.created_at.strftime('%a %e %b'),
        muscleset: day.name,
        exercises: day.target.includes(:exercise).map { |target| { id: target.id, name: target.exercise.name, sets: target.sets, reps: target.reps, weight: target.weight} },
      }}
    end

    def find_workout_day
      @workout_day = WorkoutDay.find(params[:id])
    end

    def format_workout_day
      {
        id: @workout_day.id,
        date: @workout_day.created_at.strftime('%a %e %b'),
        muscleset: @workout_day.name,
        exercises: @workout_day.target.includes(:exercise, :result).map { |target|
          {
            id: target.id,
            name: target.exercise.name,
            sets: target.sets,
            reps: target.reps,
            weight: target.weight,
            complete: target.result.first != nil ? target.result.first.complete : false,
          }.compact
        },
      }
    end
  end
end
